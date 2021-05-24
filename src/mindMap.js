export default {
  testData: [
    {
      title: 'a',
      children: [
        {
          title: 'a1',
          children: [
            { title: 'a12' },
            {
              title: 'a13',
              children: [
                { title: 'a14' }
              ]
            }
          ]
        },
        {
          title: '1.2',
          children: [
            { title: '1.2.1', borderColor: 'red', fontColor: 'red' },
            { title: '1.2.2', bgColor: 'black', fontColor: 'white' }
          ]
        }
      ]
    }
  ],

  dataMap: [
    {
      title: '1',
      children: [
        {
          title: '2'
        },
        {
          title: '3'
        }
      ]
    }
  ]
}
