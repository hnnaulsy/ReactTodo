import React, { Component } from 'react'

class AddStudent extends Component {
  render() {
    return (
      <div className="col-md-5">
        <form>
          <div className="form-group">
            <label>学号</label>
            <input type="number" className="form-control" placeholder="请输入学号" />
          </div>
          <div className="form-group">
            <label>姓名</label>
            <input type="text" className="form-control" placeholder="请输入姓名" />
          </div>
          <div className="form-group">
            <label>性别&nbsp;&nbsp;</label>
            <label className="checkbox-inline">
              <input type="radio" value="男" /> 男
            </label>
            <label className="checkbox-inline">
              <input type="radio" value="女" /> 女
            </label>
          </div>
          <div className="form-group">
            <label>年龄</label>
            <input type="text" className="form-control" placeholder="请输入姓名" />
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
            <select className="form-control">
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