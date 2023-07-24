const createTableButton = document.querySelector(`button[action="create-chessboard"]`)
const restartButton = document.querySelector('button[action="restart"]')

const tableParams = document.querySelectorAll('.table-params')
const tableCreated = document.querySelectorAll('.table-created')

const body = document.getElementsByTagName('main')[0]


function createChessBoard() {

    const rowsBase = document.querySelector('input.table-row').value
    const columnsBase = document.querySelector('input.table-column').value

    const rows = parseInt(rowsBase, 10)
    const columns = parseInt(columnsBase, 10)

    // const rowType = typeof rowsBase
    // const columnType = typeof columnsBase

    // const rowType = typeof rows
    // const columnType = typeof columns


    // alert(`You typed ${rowsBase} for rows, of type ${rowType}`)
    // alert(`You typed ${columnsBase} for columns, of type ${columnType}`)

    // alert(`You typed ${rows} for rows, which now has type ${rowType}`)
    // alert(`You typed ${columns} for columns, which now has type ${columnType}`)

    if ( (!rows) || (!columns) ) {
        alert('Please only enter numbers over zero for the width and height!')
        return restart()
    // } else if ( ( rows <= 0) || ( columns <= 0) ) {
    //     alert('Please enter numbers over 0 for the width and height!')
    //     return restart()
    } else {
        return createTable(rows, columns)
    }
}


function createTable(rows, columns) {
    // const body = document.getElementsByTagName('main')[0]
    var chessboard = document.createElement('table')
    const tbody = document.createElement('tbody')

    chessboard.style.width = "100%"
    chessboard.style.border = '1px solid black'

    for (let height = 0; height < rows; height++) {
        const tr = document.createElement('tr')

        for (let width = 0; width < columns; width++) {
            const td = document.createElement('td')
            // td.innerHTML = 'hi' 
            // td.style.width = 'calc(100% / columns)'
            td.style.height = '100px'
            td.appendChild(document.createTextNode('hi'))
            tr.appendChild(td)

            if ( (height + width) % 2 === 0 ) {
                td.style.backgroundColor = 'white'
            } else {
                td.style.backgroundColor = 'brown'

            }
        }
        tbody.appendChild(tr)
    }
    chessboard.appendChild(tbody)
    chessboard.style.margin = '20px auto'
    body.appendChild(chessboard)

    restartButton.style.display = 'block'
    createTableButton.style.display = 'none'

    tableParams.style.display = 'none'
    tableCreated.style.display = 'block'

}


function restart() {
    restartButton.style.display = 'none'
    createTableButton.style.display = 'block'

    tableParams.style.display = 'block'
    tableCreated.style.display = 'none'

    var chessboard = document.getElementsByTagName('table')[0]
    document.body.removeChild(chessboard)
}




createTableButton.addEventListener('click', createChessBoard)
restartButton.addEventListener('click', restart)

restart()