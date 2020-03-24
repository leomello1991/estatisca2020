'use strict'

const User = use('App/Models/User')

class UserController {
  async store({request, response}) {
    const data = {
      ...request.only([
        'username',
        'email',
        'password'
      ]),
      user_id: request.user_id
    }
    try {
      const user = await User.create(data)

    } catch (error) {
      return response.status(error)
    }


  }

  async update ({request, response}){
    try{
      const user = await  User.findOrFail(request.param.id)
      const userRequest = request.body
      user.merge(userRequest)
      await user.save()
      return user
    }catch (erro) {
      return  response.status(501).send('codigo ja esta sendo utilizado')

    }
  }
}

module.exports = UserController
