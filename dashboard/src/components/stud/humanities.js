var electives = [
  {
    Name1: 'Introduction to Carnatic Music',
    Code1: 'HSS F347',
    IC1: 'REENA CHERUVALATH',
    content1: 'Origins and History of Carnatic music; Basic concepts of svara, svaravalis, svarasthanas, aarohana, avarohana, sthayis; Concept of laya, tala, gati, nadai, different jaatis of taalams; Concept of raaga, Melakarta and janya; Ragalakshanam for some specific raagas; Notation of svaras, taalam  Brief biography of the Trinity, Purandaradasa, and other major composers; Concert formats and styles; Vocal or instrumental exercises including varisais, Saptataala alankaaras, Geetams, svarajati, keertanams; Listening practice.Student Descriptions :  Theory classes are held once a week while practical classes twice a week. Attendance is compulsory and carries weightage in the grade. The evaluative components also include written midsem and endsem papers as well as practical midsem and endsem exams. The assignment consists of a seminar which involves a group presentation on a topic given by the teacher. Practical classes might  be a bit hard for people who are not well-versed with music but overall, an interesting course. There is also an audit course in Carnatic music for people who are interested.',
  },
  {
    Name2: '',
    Code2: '',
    IC2: '',
    content2: '',
  },
  {
    Name1: '',
    Code1: '',
    IC1: '',
    content1: '',
  },
  {
    Name2: '',
    Code2: '',
    IC2: '',
    content2: '',
  },
]

function elec (electives) {
  return `
      <div class="flex xs12">
              <va-card
                color="success"
              >
                <va-card color="info">
                  <div style="text-align: center;">
                  <h2>${electives.Name1}
                    ${electives.Code1}
                    ${electives.IC1}
                  </h2></div></va-card>
                  ${electives.content1}
              </va-card>
            </div>
    
            <div class="flex xs12">
              <va-card
                color="danger"
              >
                <va-card color="dark">
                <div style="text-align: center;">
                  <h2>${electives.Name2}
                    ${electives.Code2}
                    ${electives.IC2}
                  </h2></div></va-card>
                  ${electives.content2}
              </va-card>
            </div>
        `
}

document.getElementById('humanitiesid').innerHTML = `
        ${electives.map(elec).join('')}
    `
