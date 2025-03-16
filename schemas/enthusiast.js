export default {
    name: 'enthusiast',
    title: 'Enthusiast',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'contactInformation',
            title: 'Contact Information',
            type: 'object',
            fields: [
                {
                    name: 'email',
                    title: 'Email',
                    type: 'email'
                },
                {
                    name: 'phoneNumber',
                    title: 'Phone Number',
                    type: 'string'
                }
            ]
        },
        {
            name: 'interests',
            title: 'Interests',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}
