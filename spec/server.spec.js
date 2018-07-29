var request = require('request');
describe('test cal',()=>{
    it('shoul multiply 2 and 2',()=>{
        expect(2*2).toBe(4);
    });

});


describe('get Message',()=>{
    it('should return status 200 OK',(done)=>{
        request.get('http://localhost:9000/messages',(err,res)=>{
            expect(res.statusCode).toEqual(200);
            done();
        })
    });

    it('should return list thats not empty',(done)=>{
        request.get('http://localhost:9000/messages',(err,res)=>{            
            expect(JSON.parse(res.body).length).toBeGreaterThan(0);
            done();
        })
    });
})