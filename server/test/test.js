cost supertest = require("supertest");
var should = require("should");
var app = require("../app");

describe("Test GET endpoint",function(){
  it("should return all events",function(done){

    supertest(app)
    .get("/api/events")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});


describe("Test POST endpoint",function(){
  it("should add events",function(done){
    let events ={
    "name of event": "races party",
    "Date of event": "12/12/2017",
    "location": "Diamond's hall",
    "descriptions": "Behind the Government's square buildings",
    "Host": "Fola Ajayi"
    "id": 1
  }

    supertest(app)
    .post("/api/events")
    .send(events)
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});

  describe("Test PUT endpoint",function(){
  it("It should modify an event",function(done){
    supertest(app)
    .put("/api/recipes/race party")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});

  describe("Test DELETE endpoint",function(){
  it("It should delete an event",function(done){
    supertest(app)
    .delete("/api/ev/race party")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
})


  {
    "name": "Ballerina hall",
    "capacity": "2500 sits",
    "rating": "* * * * *",
    "Upcoming events": "Wedding ceremony",
    "descriptions":"20 mins drive from the mainland exit"
    "id": 2
  }


  {
    "name of event": "race party",
    "Date of event": "12/12/2017",
    "location": "Diamond's hall",
    "descriptions": "Behind the Government's square buildings",
    "Host": "Fola Ajayi"
    "id": 1

    
  }