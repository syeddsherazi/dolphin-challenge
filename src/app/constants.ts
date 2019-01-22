export const ACTIVITIES = {
    ACCEPT:'accept',
    CONTACT:'contact',
    NOTE:'note',
    APPLICATION:'application',
    SETTLED:'closed_won',
    CLOSED:'closed_lost'
}


export const TIMELINE_STAGES = [
    {
        order: 0,
        title: 'Bidding, Decision or Processing',
        trigger: [
            { // TRIGGER REFERS TO THE UPDATE WHICH WILL TRIGGER FROM THIS STAGE AND TO WHICH STAGE
                // TRIGGERS CAN BE MULTIPLE E.G. IN CASE OF PENDING TO SETTLED OR PENDING TO CLOSED
                activity: 'accept',
                order: 1
            }
        ]
    },
    {
        order: 1,
        title: 'Contact',
        trigger: [
            {
                activity: 'contact',
                order: 2
            }
        ]
    },
    {
        order: 2,
        title: 'Application',
        trigger: [
            {
                activity: 'application',
                order: 3
            }
        ]
    },
    {
        order: 3,
        title: 'Pending',
        trigger: [{
            activity: 'closed_won',
            order: 4
        },
        {
            activity: 'closed_lost',
            order: 5
        }
        ]
    },
    {
        order: 4,
        title: 'Settled'
    },
    {
        order: 5,
        title: 'Closed'
    }
]

