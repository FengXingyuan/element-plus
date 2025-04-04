import { mount } from '@vue/test-utils'
import { sleep } from '@element-plus/test-utils'
import Pagination from '../src/index'
import { nextTick } from 'vue'

const TIME_OUT = 100

describe('Pagination.vue', () => {
  test('layout', () => {
    const wrapper = mount(Pagination, {
      props: {
        layout: 'prev, pager, next',
      },
    })
    expect(wrapper.find('button.btn-prev').exists()).toBe(true)
    expect(wrapper.find('ul.el-pager').exists()).toBe(true)
    expect(wrapper.find('button.btn-next').exists()).toBe(true)
    expect(wrapper.find('.el-pagination__jump').exists()).toBe(false)
    expect(wrapper.find('.el-pagination__rightwrapper').exists()).toBe(false)
    expect(wrapper.find('.el-pagination__total').exists()).toBe(false)
  })

  test('slot', () => {
    const TestComponent = {
      template: `
        <el-pagination
          layout="slot, prev, pager, next"
          :page-size="25"
          :total="100">
          <span class="slot-test">slot test</span>
        </el-pagination>
      `,
      components: {
        'el-pagination': Pagination,
      },
    }
    const wrapper = mount(TestComponent)
    expect(wrapper.find('.slot-test').exists()).toBe(true)
  })

  test('small', () => {
    const wrapper = mount(Pagination, {
      props: {
        small: true,
      },
    })
    expect(wrapper.vm.$el.classList.contains('el-pagination--small')).toBe(true)
  })

  test('pageSize', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        total: 100,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(4)
  })

  test('pageSize: NaN', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: NaN,
        total: 100,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(7)
  })

  test('pageCount', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        pagerCount: 5,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(5)
  })

  test('pagerCount', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        total: 1000,
        pagerCount: 21,
      },
    })
    expect(wrapper.findAll('li.number').length).toBe(21)
  })

  test('will work without total & page-count', async () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 25,
        currentPage: 2,
      },
    })
    wrapper.find('.btn-prev').trigger('click')
    await sleep(TIME_OUT)
    expect(wrapper.vm.internalCurrentPage).toEqual(1)
    wrapper.find('.btn-prev').trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(1)
  })

  test('currentPage', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 20,
        total: 200,
        currentPage: 3,
      },
    })
    expect(wrapper.find('li.number.active').text()).toEqual('3')
  })

  test('currentPage: NaN', () => {
    const wrapper = mount(Pagination, {
      props: {
        pageSize: 20,
        total: 200,
        currentPage: NaN,
      },
    })
    expect(wrapper.find('li.number.active').text()).toEqual('1')
    expect(wrapper.vm.$el.querySelectorAll('li.number').length).toBe(7)
  })

  test('layout is empty', () => {
    const wrapper = mount(Pagination, {
      props: {
        layout: '',
      },
    })
    expect(wrapper.vm.$el.textContent).toEqual('')
  })
})

describe('click pager', () => {
  test('click ul', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.find('.el-pager').trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(1)
  })

  test('click li', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.findAll('.el-pager li.number')[1].trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(2)
  })

  test('click next icon-more', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.find('.btn-quicknext.more').trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(6)
  })

  test('click prev icon-more', async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    wrapper.find('.btn-quicknext.more').trigger('click')
    await sleep(TIME_OUT)
    expect(wrapper.find('.btn-quickprev.more').exists()).toBe(true)
    wrapper.find('.btn-quickprev.more').trigger('click')
    expect(wrapper.vm.internalCurrentPage).toEqual(1)
  })

  test('click last page', async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 1000,
      },
    })
    const nodes = wrapper.findAll('li.number')
    nodes[nodes.length - 1].trigger('click')
    await sleep(TIME_OUT)
    expect(wrapper.find('.btn-quickprev.more').exists()).toBe(true)
    expect(wrapper.find('.btn-quicknext.more').exists()).toBe(false)
  })
  test('should emit change size evt', async () => {
    const onSizeChange = jest.fn()
    const wrapper = mount({
      components: {
        'el-pagination': Pagination,
      },
      template: `
        <el-pagination
          @size-change="onSizeChange"
         :total="1000"
         :page-sizes="[100, 200, 300]"
         layout="sizes, pager"
         :page-size="100"/>
      `,
      methods: {
        onSizeChange,
      },
    })

    const items = wrapper.findAll('.el-select-dropdown__item:not(.selected)')
    await items[0].trigger('click')
    expect(onSizeChange).toHaveBeenCalled()
    expect(wrapper.findComponent(Pagination).emitted()).toHaveProperty('size-change')
  })

  test('should handle total size change', async () => {
    const onCurrentChange = jest.fn()
    const wrapper = mount({
      components: {
        [Pagination.name]: Pagination,
      },
      template: `
        <el-pagination
          :total="total"
          :page-size="pageSize"
          @current-change="onCurrentChange"
          v-model:currentPage="currentPage"
        />
      },
      `,
      methods: {
        onCurrentChange,
      },
      data() {
        return {
          currentPage: 3,
          total: 1000,
          pageSize: 100,
        }
      },
    })

    await nextTick()

    expect(wrapper.vm.currentPage).toBe(3)

    wrapper.vm.total = 100
    await nextTick()
    expect(wrapper.vm.currentPage).toBe(1)
    expect(onCurrentChange).toHaveBeenCalledWith(1)
  })

})

