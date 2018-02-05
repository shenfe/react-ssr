const sleep = function (d) {
  for (let t = Date.now(); Date.now() - t <= d;);
};

module.exports = app => {
  app.get('/api/getDetail', function (req, res) {
    sleep(500);
    res.json({
      code: 200,
      data: {
        id: req.query.id,
        title: `Day ${req.query.id}`,
        content: 'Today is a nice day.'
      }
    });
  });

  app.get('/api/getList', function (req, res) {
    sleep(500);
    res.json({
      code: 200,
      data: [
        {
          id: 1,
          title: 'Day 1'
        },
        {
          id: 2,
          title: 'Day 2'
        },
        {
          id: 3,
          title: 'Day 3'
        }
      ]
    });
  });
}
