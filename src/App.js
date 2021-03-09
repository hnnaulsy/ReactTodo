import React, { Component } from 'react'
import StudentTitle from './Components/StudentTitle'
import AddStudent from './Components/AddStudent'
import StudentList from './Components/StudentList'

class App extends Component {

  // 定义状态用于管理学员信息
  state = {
    studentList: [
      {
        "number": "01",
        "name": "zce",
        "age": "40",
        "sex": "男",
        "college": "大前端",
        "hobbies": [
          "篮球",
          "足球"
        ]
      },
      {
        "number": "02",
        "name": "zoe",
        "age": "30",
        "sex": "女",
        "college": "python",
        "hobbies": [
          "篮球",
          "网球"
        ]
      },
      {
        "number": "03",
        "name": "syy",
        "age": "18",
        "sex": "男",
        "college": "大前端",
        "hobbies": [
          "篮球"
        ]
      }
    ]
  }

  // 定义一个方法用于处理 studentList 状态
  addStudent = (student, callback) => {
    this.setState({
      studentList: [...this.state.studentList, student]
    }, () => {
      callback()
      console.log(this.state.studentList)
    })
  }

  // 定义删除操作
  removeStudent = (number) => {
    // 核心：利用 number 找到 studentList 当中需要被删除的项，将它从原数据中拿出
    // 最后再将处理后的数据重新 setState 给 state ，之后界面就会自动更新  

    // 01 将原数据进行深拷贝
    const studentList = JSON.parse(JSON.stringify(this.state.studentList))

    // 02 从拷贝后的原数据中查找 number 所对应的项
    const index = studentList.findIndex(student => student.number === number)

    // 03 利用上述的 index 将目标项从数组中删除
    studentList.splice(index, 1)

    // 04 数据同步操作
    this.setState({ studentList }, () => {
      console.log(this.state.studentList)
    })

  }

  render() {
    return (
      <div className={'container'}>
        <StudentTitle />
        <AddStudent addStudent={this.addStudent} />
        <StudentList studentList={this.state.studentList} removeStudent={this.removeStudent} />
      </div>
    )
  }
}

export default App
