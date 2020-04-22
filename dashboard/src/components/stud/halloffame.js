var fame = [
  {
    Name1: 'Hardik',
    content1: 'Mr. Hardk Hingorani’s ( 2012B2A1636G)  research paper  co-authored with Prof. Ranjan Dey won the first position in the Alumni Affairs scholarship and awarded a scholarship of Rs. 10,000/-.',
  },
  {
    Name2: 'Avidipto chakraborty',
    content2: 'Avidipto chakraborty(2012B3A7506G) has scored a perfect 100 percentiles in CAT 2016.',
  },
  {
    Name1: '',
    content1: '',
  },
  {
    Name2: '',
    content2: '',
  },
]

function hof (fame) {
  return `
  <div class="flex xs12">
          <va-card
            color="success"
          >
            <va-card color="info">
              <div style="text-align: center;">
              <h2>${fame.Name1}</h2></div></va-card>
              ${fame.content1}
          </va-card>
        </div>

        <div class="flex xs12">
          <va-card
            color="danger"
          >
            <va-card color="dark">
            <div style="text-align: center;">
              <h2>${fame.Name2}</h2></div></va-card>
              ${fame.content2}
          </va-card>
        </div>
    `
}

document.getElementById('halloffameid').innerHTML = `
    ${fame.map(hof).join('')}
`
