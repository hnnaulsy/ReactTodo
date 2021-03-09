import React, { Component } from 'react'

class AddStudent extends Component {

  constructor() {
    super()
    this.stateHandler = this.stateHandler.bind(this)
  }

  // 01 定义组件中的状态
  state = {
    number: '',
    name: '',
    sex: '女',
    age: '',
    college: '大前端',
    hobbies: [
      {
        id: 1,
        title: '篮球',
        isChecked: false
      },
      {
        id: 2,
        title: '足球',
        isChecked: false
      },
      {
        id: 3,
        title: '网球',
        isChecked: false
      },
    ]
  }

  // origin = { ...this.state }
  origin = JSON.parse(JSON.stringify(this.state))

  stateHandler(e) {
    // 获取我们当前输入的值，然后调用 setState 更新在具体的属性身上
    const value = e.target.value
    const prop = e.target.name

    this.setState({
      [prop]: value
    }, () => {
      console.log(this.state.college)
    })
  }

  hobbyHandler(index, ev) {
    // 当前操作需要提前获取被操作项的索引，事件对象
    const isChecked = ev.target.checked
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = isChecked
    this.setState({ hobbies }, () => {
    })
  }

  submit = (ev) => {
    ev.preventDefault()
    /**
     * 提交的时候需要将表单里的有用信息整合在一起
     *  01 筛选出我们当前次选中的爱好
     *  02 将上述处理好的数据与其它数据组合在一起
     *  03 将当前的数据利用回调的方式传回给上层组件（）
     *  04 提交操作完成之后我们再将之前的 state 数据再次设置回界面上
     */
    const hobbies = this.state.hobbies
      .filter(hobby => hobby.isChecked)
      .map(hobby => hobby.title)

    const formValue = {
      ...this.state,
      hobbies
    }

    this.props.addStudent(formValue, () => {
      this.setState(this.origin)
    })
  }

  render() {
    return (
      <div className="col-md-5">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>学号</label>
            <input name={'number'} value={this.state.number} onChange={this.stateHandler} type="number" className="form-control" placeholder="请输入学号" />
          </div>
          <div className="form-group">
            <label>姓名</label>
            <input name={'name'} value={this.state.name} onChange={this.stateHandler} type="text" className="form-control" placeholder="请输入姓名" />
          </div>
          <div className="form-group">
            <label>性别&nbsp;&nbsp;</label>
            <label className="checkbox-inline">
              <input name="sex" onChange={this.stateHandler} checked={this.state.sex === '男'} type="radio" value="男" /> 男
            </label>
            <label className="checkbox-inline">
              <input name="sex" onChange={this.stateHandler} checked={this.state.sex === '女'} type="radio" value="女" /> 女
            </label>
          </div>
          <div className="form-group">
            <label>年龄</label>
            <input name={'age'} value={this.state.age} onChange={this.stateHandler} type="text" className="form-control" placeholder="请输入年龄" />
          </div>
          <div className="form-group">
            <label>爱好</label>
            {
              this.state.hobbies.map((hobby, index) => {
                return (
                  <div className="checkbox" key={hobby.id}>
                    <label>
                      <input type="checkbox" checked={hobby.isChecked} value={hobby.title} onChange={this.hobbyHandler.bind(this, index)} /> {hobby.title}
                    </label>
                  </div>
                )
              })
            }
          </div>
          <div className="form-group">
            <label>所属学院</label>
            <select name={'college'} value={this.state.college} onChange={this.stateHandler} className="form-control">
              <option value="大前端">大前端</option>
              <option value="Java">Java</option>
              <option value="python">python</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">添加</button>
        </form>
      </div>
    )
  }
}

export default AddStudent