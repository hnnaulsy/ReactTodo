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
    college: '大前端'
  }

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

  render() {
    return (
      <div className="col-md-5">
        <form>
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
              <input name="sex" onChange={this.stateHandler} defaultChecked={this.state.sex === '男'} type="radio" value="男" /> 男
            </label>
            <label className="checkbox-inline">
              <input name="sex" onChange={this.stateHandler} defaultChecked={this.state.sex === '女'} type="radio" value="女" /> 女
            </label>
          </div>
          <div className="form-group">
            <label>年龄</label>
            <input name={'age'} value={this.state.age} onChange={this.stateHandler} type="text" className="form-control" placeholder="请输入姓名" />
          </div>
          <div className="form-group">
            <label>爱好</label>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="足球" /> 足球
            </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="篮球" /> 篮球
            </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="橄榄球" /> 橄榄球
            </label>
            </div>
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