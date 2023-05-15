import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: '043958',
        role:'student',
        password: 'sldaf03485',
        name: {
            firstName: 'md',
            middleName: 'saymon',
            lastName: 'shoab',
        },
        dateOfBirth: '04/2/2012',
        gender: 'male',
        email: 'mdsaymonshaob@gmail.com',
        contactNo:'0239845',
        emergencyContactNo:'0239480239',
        presentAddress:'efoqwjeowejoewj',
        permanentAddress:'qwlejojweojweorjwee',
    })
    await user.save()
    console.log(user);
}