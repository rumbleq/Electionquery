var should = require('chai').should, expect = require('chai').expect,
supertest = require('supertest'), 
api = supertest('https://www.googleapis.com/civicinfo/v2');

describe('election query', function() {
    it('should return a 200 response', function (done) {
        api.get('/elections?key=AIzaSyChCq7r4LPMM5GFDx4njmzArYb6569fErw')
        .set('Accept', 'application/json')
        .expect(200,done);
    })

    it('should check the body for keys and values', function (done) {
        api.get('/elections?key=AIzaSyChCq7r4LPMM5GFDx4njmzArYb6569fErw')
        .set('Accept', 'application/json')
        .end(function(err, res) {
            expect(res.body).to.have.property("kind");
            expect(res.body.kind).to.equal("civicinfo#electionsQueryResponse");
            expect(res.body).to.have.property("elections");
            expect(res.body.elections).length(5);
            expect(res.body.elections[0].name).to.equal('VIP Test Election')
            expect(res.body.elections[0].id).to.equal('2000')
            res.body.elections.forEach(element => {
                expect(element).to.have.property("name");
                
            });

            console.log(res.body.elections);
        done();
        })
/*
        it('should check the body for keys and values', function (done) {
            api.get('/elections?key=AIzaSyChCq7r4LPMM5GFDx4njmzArYb6569fErw')
            .set('Accept', 'application/json')
            .end(function(err, res) {
                expect(res.body).to.have.property("kind");
                expect(res.body.kind).to.equal("civicinfo#electionsQueryResponse");
                expect(res.body).to.have.property("elections");
                expect(res.body.elections).length(5);
                expect(res.body.elections[0].name).to.equal('VIP Test Election')
                expect(res.body.elections[0].id).to.equal('2000')
                /*
                res.body.elections.forEach(element => {
                    expect(element).to.have.property("name");
                    
                });
                
                console.log(res.body.elections);
            done();
            })
        
        // .end(function(err, res){
        //     expect(res.body).to.have.key("kind");
        //     done();
        // })*/
    })
})

/*
let chai = require('chai');
let should = require("chai").should;
let have = require("chai").have;
let chaiHttp = require("chai-http");
let baseUrl = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyChCq7r4LPMM5GFDx4njmzArYb6569fErw";

chai.use(chaiHttp);

describe('electionquery Get', () => {
    it("Gets the election query", (done) => {
        chai.request(baseUrl)
            .get('/')
            .end((err, res) => {
                res.status().np;
                done();
            })
    })
})




var should = require("chai").should;
var have = require("chai").have;
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyChCq7r4LPMM5GFDx4njmzArYb6569fErw";
var util = require("util");

describe('return all election results', function (){
    it('returns all election results', function(done){
        request.get({url: baseUrl},
        function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.include("kind");
            expect(response.body).to.include("elections");
            expect(response.toJSON.length).to.equal(0);
            console.log(body);
            // console.log("Count: " + response.length)
            done();
        })
    })

    it('validates property', function(done){
        request.get({url: baseUrl},
        function(error, response) {
            // expect(response.body).to.include("kind");
            // expect(response.body).to.include("elections")
            // expect(response.body).to.include("name");
            // expect(response.body).to.include("ocdDivisionId")
            // expect(response.body)
            
        
            // response.body.should.have.key("kind");
            expect(response.body).to.include("kind")

            expect(response.body.kind).to.equal("civicinfo#electionsQueryResponse")

            // expect(response.body).to.have.property("kind");
                
            
            console.log(body);
            done();
        })
    })
})

describe('return all', function (){
    it('returns all', function(done){
        request.get({url: baseUrl + '/people' },
        function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            console.log(body);
            done();
        })
    })
})

describe('return R2-D2', function (){
    it('returns R2-D2', function(done){
        request.get({url: baseUrl + '/people?={"name": "R2-D2"}' },
        function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            console.log(body);
            done();
        })
    })

})

*/