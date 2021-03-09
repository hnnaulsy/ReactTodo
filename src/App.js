import React, { Component } from 'react'
import StudentTitle from './Components/StudentTitle'
import AddStudent from './Components/AddStudent'
import StudentList from './Components/StudentList'

class App extends Component {

  // 定义状态用于管理学员信息
  state = {
    studentList: []
  }

  // 定义一个方法用于处理 studentList 状态
  addList = (student, callback) => {
    this.setState({
      studentList: [...this.state.studentList, student]
    }, () => {
      callback()
      console.log(this.state.studentList)
    })
  }

  render() {
    return (
      <div className={'container'}>
        <StudentTitle />
        <AddStudent addList={this.addList} />
        <StudentList />
      </div>
    )
  }
}

export default App
