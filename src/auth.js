

class Authorized {
  constructor() {
    this.authorized = false
  }

  login() {
    this.authorized = true
  }

  logout() {
    this.authorized = false
  }

  isAuthorized() {
    return this.authorized
  }
}

export default new Authorized()
