const daysGr = ['Κυριακη', "Δευτερα", "Τριτη", "Τεταρτη", "Πεμπτη", "Παρασκευη", "Σαββατο"]

const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {

  this.setInterval(() => printGRDate(), 1000)
  
  this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
    onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').value.trim(), softDeleted: false })
  })

  this.document.querySelector('#inputNote').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      onInsertHandler({key: count + 1, note: event.target.value.trim(), softDeleted: false })
    }
  })  

})

function printGRDate() {
  const currentDate = new Date()
  const day = currentDate.getDay()
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const seconds = currentDate.getSeconds()

  const dayStr = daysGR[day]
  const monthStr = monthsGR[month]

  const dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
  const timeStr = `${(hours < 10) ? '0': ''}${hours}:${(minutes < 10) ? '0': ''}${minutes}:${(seconds < 10) ? '0': ''}${seconds}`
  document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr
}

function onInsertHandler(data) {
  if(data.note) return
  insertNote(data)
  reset()
}

function insertNote(note) {
  notes = [...notes, note]
  count++
  renderNotes()
}

function renderNotes() {
  const item = document.querySelector('#noteWrapper')

  item.innerHTML = notes.map((notes) => `<div id="${'noteTemplate' + note.key}" class="flex justify-between items-center px-[10px] py-[2px] border-b border-black">
  <div id="${'noteInfo' + note.key}" class="flex items-center">
    <input type="checkbox" id="${'noteCheck' + note.key}" onclick="strikeThrough(${note.key})" class="w-[25px] h-[25px] mr-[5px]" ${note.softDeleted ? 'checked' : ''}>
    <label id="${'noteTxt' + note.key}" for="${'noteCheck' + note.key}" class="w-[200px] max-h-[150px] leading-[1.2rem] overflow-hidden break-words whitespace-normal text-base ${note.softDeleted ? 'line-through text-gray-500': ''}">${note.note}</label>
  </div>
  <button type="button" id="${'noteDelBtn' + note.key}" class="w-[35px] h-[35px]" onclick="deleteNote(${note.key})">X</button>
</div>`).join("")
  
}