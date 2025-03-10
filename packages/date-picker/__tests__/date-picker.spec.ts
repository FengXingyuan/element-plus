import Picker from '@element-plus/time-picker/src/common/picker.vue'
import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'
import { nextTick } from 'vue'
import DatePicker from '../src/date-picker'

const _mount = (template: string, data = () => ({}), otherObj?) => mount({
  components: {
    'el-date-picker': DatePicker,
  },
  template,
  data,
  ...otherObj,
}, {
  attachTo: 'body',
})

afterEach(() => {
  document.documentElement.innerHTML = ''
})


describe('DatePicker', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
        :readonly="true"
        placeholder='test_'
        format='HH-mm-ss'
    />`)
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    expect(input.attributes('readonly')).not.toBeUndefined()
  })

  it('select date', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
    />`, () => ({ value: '' }))
    const date = dayjs()

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const spans = document.querySelectorAll('.el-date-picker__header-label')
    const arrowLeftElm = document.querySelector('.el-date-picker__prev-btn.el-icon-arrow-left') as HTMLElement
    const arrowRightElm = document.querySelector('.el-date-picker__next-btn.el-icon-arrow-right') as HTMLElement
    expect(spans[0].textContent).toContain(date.year())
    expect(spans[1].textContent).toContain(date.format('MMMM'))
    const arrowLeftYeayElm = document.querySelector('.el-date-picker__prev-btn.el-icon-d-arrow-left') as HTMLElement
    arrowLeftYeayElm.click()
    let count = 20
    while (--count) {
      arrowLeftElm.click()
    }
    count = 20
    while (--count) {
      arrowRightElm.click()
    }
    await nextTick()
    expect(spans[0].textContent).toContain(date.add(-1, 'year').year())
    expect(spans[1].textContent).toContain(date.format('MMMM'));
    (document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
  })

  it('defaultTime and clear value', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        :default-time="new Date(2011,1,1,12,0,1)"
    />`, () => ({ value: '' }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick();
    (document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
    expect(vm.value.getHours()).toBe(12)
    expect(vm.value.getMinutes()).toBe(0)
    expect(vm.value.getSeconds()).toBe(1)
    const picker = wrapper.findComponent(Picker);
    (picker.vm as any).showClose = true
    await nextTick();
    (picker.element.querySelector('.el-icon-circle-close') as HTMLElement).click()
    expect(vm.value).toBeNull()
  })

  it('event change, focus, blur', async () => {
    const changeHandler = jest.fn()
    const focusHandler = jest.fn()
    const blurHandler = jest.fn()
    let onChangeValue
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      />`, () => ({ value: new Date(2016, 9, 10, 18, 40) }), {
      methods: {
        onChange(e) {
          onChangeValue = e
          return changeHandler(e)
        },
        onFocus(e) {
          return focusHandler(e)
        },
        onBlur(e) {
          return blurHandler(e)
        },
      },
    })

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(focusHandler).toHaveBeenCalledTimes(1);
    (document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    expect(changeHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(1)
    expect(onChangeValue.getTime()).toBe(new Date(2016, 9, 1).getTime())
  })

  it('shortcuts', async () => {
    const text = 'Yesterday'
    const value = new Date(Date.now() - 86400000)
    value.setHours(0,0,0,0)
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        :shortcuts="shortcuts"
    />`, () => ({ value: '', shortcuts: [{
      text,
      value,
    }] }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const shortcut = document.querySelector('.el-picker-panel__shortcut')
    expect(shortcut.textContent).toBe(text)
    expect(document.querySelector('.el-picker-panel__sidebar')).not.toBeNull();
    (shortcut as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.valueOf()).toBe(value.valueOf())
  })

  it('disabledDate', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        :disabledDate="disabledDate"
    />`, () => ({ value: '', disabledDate(time) {
      return time.getTime() < Date.now() - 8.64e7
    } }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.disabled')).not.toBeNull()
  })
})

describe('DatePicker Navigation', () => {
  let prevMonth, prevYear, nextMonth, nextYear, getYearLabel, getMonthLabel

  const initNavigationTest = async value => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
    />`, () => ({ value }))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    prevMonth = document.querySelector('button.el-icon-arrow-left')
    prevYear = document.querySelector('button.el-icon-d-arrow-left')
    nextMonth = document.querySelector('button.el-icon-arrow-right')
    nextYear = document.querySelector('button.el-icon-d-arrow-right')
    getYearLabel = () => document.querySelectorAll('.el-date-picker__header-label')[0].textContent
    getMonthLabel = () => document.querySelectorAll('.el-date-picker__header-label')[1].textContent
  }

  it('month, year', async() => {
    await initNavigationTest(new Date(2000, 0, 1))
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('January')

    prevMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('1999')
    expect(getMonthLabel()).toContain('December')

    prevYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('1998')
    expect(getMonthLabel()).toContain('December')

    nextMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('1999')
    expect(getMonthLabel()).toContain('January')

    nextYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('January')
  })

  it('month with fewer dates', async() => {
    // July has 31 days, June has 30
    await initNavigationTest(new Date(2000, 6, 31))
    prevMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('June')
  })

  it('year with fewer Feburary dates', async() => {
    // Feburary 2008 has 29 days, Feburary 2007 has 28
    await initNavigationTest(new Date(2008, 1, 29))
    prevYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('2007')
    expect(getMonthLabel()).toContain('February')
  })

  it('month label with fewer dates', async() => {
    await initNavigationTest(new Date(2000, 6, 31))
    const yearLabel = document.querySelectorAll('.el-date-picker__header-label')[0];
    (yearLabel as HTMLElement).click()
    await nextTick()
    const year1999Label = document.querySelectorAll('.el-year-table td a')[1];
    (year1999Label as HTMLElement).click()
    await nextTick()
    const juneLabel = document.querySelectorAll('.el-month-table td a')[5];
    (juneLabel as HTMLElement).click()
    await nextTick()
    expect(getYearLabel()).toContain('2001')
    expect(getMonthLabel()).toContain('June')
    const monthLabel = document.querySelectorAll('.el-date-picker__header-label')[1];
    (monthLabel as HTMLElement).click()
    await nextTick()
    const janLabel = document.querySelectorAll('.el-month-table td a')[0];
    (janLabel as HTMLElement).click()
    await nextTick()
    expect(getYearLabel()).toContain('2001')
    expect(getMonthLabel()).toContain('January')
  })
})

describe('MonthPicker', () => {
  it('basic', async () => {
    const wrapper = _mount(`<el-date-picker
    type='month'
    v-model="value"
  />`, () => ({ value: new Date(2020, 7, 1) }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect((document.querySelector('.el-month-table') as HTMLElement).style.display).toBe('')
    expect(document.querySelector('.el-year-table')).toBeNull();
    (document.querySelector('.el-month-table a.cell') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.getMonth()).toBe(0)
  })
})

describe('YearPicker', () => {
  it('basic', async () => {
    const wrapper = _mount(`<el-date-picker
    type='year'
    v-model="value"
  />`, () => ({ value: new Date(2020, 7, 1) }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect((document.querySelector('.el-year-table') as HTMLElement).style.display).toBe('')
    expect(document.querySelector('.el-month-table')).toBeNull()

    const leftBtn = document.querySelector('.el-icon-d-arrow-left') as HTMLElement
    const rightBtn = document.querySelector('.el-icon-d-arrow-right') as HTMLElement
    let count = 2

    while (--count) {
      leftBtn.click()
    }
    count = 3
    while (--count) {
      rightBtn.click()
    }

    await nextTick();

    (document.querySelector('.el-year-table a.cell') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.getFullYear()).toBe(2030)
  })
})

describe('WeekPicker', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
    type='week'
    v-model="value"
  />`, () => ({ value: new Date(2020, 7, 15) }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.is-week-mode')).not.toBeNull();
    // select month still is in week-mode
    (document.querySelectorAll('.el-date-picker__header-label')[1] as HTMLElement).click()
    await nextTick();
    (document.querySelectorAll('.el-month-table .cell')[7] as HTMLElement).click()
    await nextTick()
    expect(document.querySelector('.is-week-mode')).not.toBeNull()
    const numberOfHighlightRows = () => document.querySelectorAll('.el-date-table__row.current').length;
    (document.querySelector('.el-date-table__row ~ .el-date-table__row td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).not.toBeNull()
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(numberOfHighlightRows()).toBe(1);
    // test: next month should not have highlight
    (document.querySelector('.el-icon-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(numberOfHighlightRows()).toBe(0);
    // test: next year should not have highlight
    (document.querySelector('.el-icon-arrow-left') as HTMLElement).click()
    await nextTick();
    (document.querySelector('.el-icon-d-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(numberOfHighlightRows()).toBe(0)
  })
})

describe('DatePicker dates', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
    type='dates'
    v-model="value"
  />`, () => ({ value: '' }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const td = (document.querySelectorAll('.el-date-table__row .available') as NodeListOf<HTMLElement>)
    const vm = wrapper.vm as any
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(2)
    expect(document.querySelectorAll('.el-date-table__row .selected').length).toBe(2)
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(0)
  })
})

describe('DateRangePicker', () => {

  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
    type='daterange'
    v-model="value"
  />`, () => ({ value: '' }))
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const panels = document.querySelectorAll('.el-date-range-picker__content')
    expect(panels.length).toBe(2);
    (panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick();
    (panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(28)
    // value is array
    const vm = wrapper.vm as any
    expect(Array.isArray(vm.value)).toBeTruthy()
    // input text is something like date string
    expect(inputs[0].element.value.length).toBe(10)
    expect(inputs[1].element.value.length).toBe(10)
  })

  it('reverse selection', async () => {
    const wrapper = _mount(`<el-date-picker
      type='daterange'
      v-model="value"
    />`, () => ({ value: '' }))
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const panels = document.querySelectorAll('.el-date-range-picker__content');
    (panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick();
    (panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(28)
    const vm = wrapper.vm as any
    expect(vm.value[0].getTime() < vm.value[1].getTime()).toBeTruthy()
  })

  it('unlink:true', async () => {
    const wrapper = _mount(`<el-date-picker
      type='daterange'
      v-model="value"
      unlink-panels
    />`, () => ({ value: [new Date(2000, 9, 1), new Date(2000, 11, 2)] }))
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    const left = panels[0].querySelector('.el-date-range-picker__header')
    const right = panels[1].querySelector('.is-right .el-date-range-picker__header')
    expect(left.textContent).toBe('2000  October')
    expect(right.textContent).toBe('2000  December');
    (panels[1].querySelector('.el-icon-d-arrow-right') as HTMLElement).click()
    await nextTick();
    (panels[1].querySelector('.el-icon-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(left.textContent).toBe('2000  October')
    expect(right.textContent).toBe('2002  January')
  })

  it('daylight saving time highlight', async() => {
    // Run test with environment variable TZ=Australia/Sydney
    // The following test uses Australian Eastern Daylight Time (AEDT)
    // AEST -> AEDT shift happened on 2016-10-02 02:00:00
    const wrapper = _mount(`<el-date-picker
      type='daterange'
      v-model="value"
      unlink-panels
    />`, () => ({ value: [new Date(2016, 9, 1), new Date(2016, 9, 3)] }))

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
  })
})

describe('MonthRange', () => {
  it('works', async () => {
    const wrapper = _mount(`<el-date-picker
      type='monthrange'
      v-model="value"
    />`, () => ({ value: '' }))

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    expect(panels.length).toBe(2)
    const p0 = <HTMLElement>panels[0].querySelector('td:not(.disabled)')
    p0.click()
    await nextTick()
    const p1 = (<HTMLElement>panels[1].querySelector('td:not(.disabled)'))
    p1.click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(0)
    // value is array
    const vm = wrapper.vm as any
    expect(Array.isArray(vm.value)).toBeTruthy()
    // input text is something like date string
    expect(inputs[0].element.value.length).toBe(7)
    expect(inputs[1].element.value.length).toBe(7)
    // reverse selection
    p1.click()
    await nextTick()
    p0.click()
    await nextTick()
    expect(vm.value[0].getTime() < vm.value[1].getTime()).toBeTruthy()
  })

  it('type:monthrange unlink:true', async () => {
    const wrapper = _mount(`<el-date-picker
      type='monthrange'
      v-model="value"
      unlink-panels
    />`, () => ({ value: [new Date(2000, 9), new Date(2002, 11)] }))

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    const left = panels[0].querySelector('.el-date-range-picker__header')
    const right = panels[1].querySelector('.is-right .el-date-range-picker__header')
    expect(left.textContent).toContain(2000)
    expect(right.textContent).toContain(2002);
    (panels[1].querySelector('.el-icon-d-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(left.textContent).toContain(2000)
    expect(right.textContent).toContain(2003)
  })

  it('daylight saving time highlight', async () => {
    const wrapper = _mount(`<el-date-picker
      type='monthrange'
      v-model="value"
      unlink-panels
    />`, () => ({ value: [new Date(2016, 6), new Date(2016, 12)] }))

    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
  })
})

