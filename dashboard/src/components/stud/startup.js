var start = [
  {
    Name1: 'Hitch Tag',
    content1: 'Bluetooth enabled Anti- lost, anti- theft proximity tag ',
  },
  {
    Name2: 'Sustainable Biosolutions LLP',
    content2: 'New technologies for sustainable growth in environmental engineering and biotechnology.',
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

function startup (start) {
  return `
    <div class="flex xs12">
            <va-card
              color="success"
            >
              <va-card color="info">
                <div style="text-align: center;">
                <h2>${start.Name1}</h2></div></va-card>
                ${start.content1}
            </va-card>
          </div>
  
          <div class="flex xs12">
            <va-card
              color="danger"
            >
              <va-card color="dark">
              <div style="text-align: center;">
                <h2>${start.Name2}</h2></div></va-card>
                ${start.content2}
            </va-card>
          </div>
      `
}

document.getElementById('startupid').innerHTML = `
      ${start.map(startup).join('')}
  `
