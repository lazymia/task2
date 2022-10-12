describe('API testing with Cypress', () =>{
    beforeEach(()=>{
        cy.request('/')    
    })
    it('creates booking for a valid customer using POST', ()=>{
        cy.request({
            method: 'POST',
            url: '/booking',
            body:{
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }).then((res)=>{
            //expect(res.body).to.have.property('json');
            expect(res.status).to.eql(200)
        })
    })
    it.only('does not create booking for an invalid customer using POST', ()=>{
        cy.request({
            method: "POST",
            url:"/booking",
            body:{
                "totalprice" : 111,
                "depositpaid" : false,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }).then((res)=>{
            expect(res.body.status).to.be(500)
        })
    })
})
