import FrR from '@/FrR'

describe('FrRouter', function () {
  describe('#start', function () {
    var fr = new FrR()

    it('FrR shoudl exist', function (done) {
      expect(true).to.equal(true)
      done()
    })

    let path = fr.build('/a/b')

    it('path should be rebuild', function (done) {
      expect(path).to.equal('/a/b')
      done()
    })
  })
})
