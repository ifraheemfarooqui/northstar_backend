import { User } from "./User.js"

const getUserById = async(user_id) => {

    const user = User.findByPk(user_id)

    return user
}

const updateUserById = async(data,user_id) => {
    const user = await User.update(data, {where:{id:user_id}, returning: true, plain:true })

    return user
}

export {getUserById , updateUserById}

