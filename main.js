let x = [], y = [], value = [], column, num, num1;
document.getElementById('mode2').style.display = 'none';
document.getElementById('modes2').style.display = 'none';
document.getElementById('next2').style.display = 'none';
document.getElementById('mode1').style.display = 'none';
document.getElementById('mode1dep').style.display = 'none';
document.getElementById('code-gen').style.display = 'none';
document.getElementById('codemake').style.display = 'none';
document.getElementById('load').style.display = 'none';
document.getElementById('load2').style.display = 'none';
document.getElementById('strong').style.display = 'none';
document.getElementById('strong2').style.display = 'none';
document.getElementById('mode2next').style.display = 'none';
document.getElementById('plot').style.display = 'none';
document.getElementById('x1').style.display = 'none';
document.getElementById('x2').style.display = 'none';
document.getElementById('y1').style.display = 'none';
document.getElementById('y2').style.display = 'none';
document.getElementById('run').style.display = 'none';
document.getElementById('frame').style.display = 'none';
let mode = document.getElementById('modes');
document.getElementById('modeNext').addEventListener('click', function () {
    if (mode.value == "1") {
        document.getElementById('mode1').style.display = 'block';
        document.getElementById('mode1ind').addEventListener('click', function () {
            num = document.getElementById('mode-num').value;
            num1 = parseInt(num);
            if (num == "") {
                Swal.fire({
                    color: 'red',
                    icon: 'error',
                    title: 'Oops...',
                    showConfirmButton: false,
                    showCloseButton: true,
                    text: 'Enter the no. of features',
                })
                document.getElementById('mode-num').focus;
            }
            else {
                for (let i = 0; i < num1; i++) {
                    const xfield = prompt("Enter the no. " + (i + 1) + " independent value");
                    x[i] = parseFloat(xfield);
                }
                document.getElementById('mode1dep').style.display = 'block';
            }
        })
        document.getElementById('mode1dep').addEventListener('click', function () {
            num = document.getElementById('mode-num').value;
            num1 = parseInt(num);
            for (let i = 0; i < num1; i++) {
                const yfield = prompt("Enter the no. " + (i + 1) + " dependent value");
                y[i] = parseFloat(yfield);
            }
            document.getElementById('plot').style.display = 'block';
            document.getElementById('modes2').style.display = 'block';
            document.getElementById('next2').style.display = 'block';
        })
        document.getElementById('next2').addEventListener('click', function () {
            document.getElementById('modes2').style.display = 'block';
            if (document.getElementById('modes2').value == "1") {
                document.getElementById('x1').style.display = 'block';
                document.getElementById('x2').style.display = 'block';
                document.getElementById('y1').style.display = 'block';
                document.getElementById('y2').style.display = 'block';
            }
            else {
                document.getElementById('code-gen').style.display = 'block';
                document.getElementById('code-gen').addEventListener('click', function () {
                    document.getElementById('codex').innerHTML = "x=np.array([" + x + "])";
                    document.getElementById('codey').innerHTML = "y=np.array([" + y + "])";
                    document.getElementById('load').style.display = 'block';
                    document.getElementById('strong').style.display = 'block';
                    setTimeout(function () {
                        document.getElementById('load').style.display = 'none';
                        document.getElementById('strong').style.display = 'none';
                        Swal.fire({
                            icon: 'success',
                            title: 'Congratulations',
                            text: 'Code Generated Successfully'
                        })
                    }, 2000);
                    setTimeout(function () {
                        document.getElementById('codemake').style.display = 'block';
                        document.getElementById('run').style.display = 'block';
                    }, 3000);
                })
                document.getElementById('run').addEventListener('click', function () {
                    document.getElementById('load2').style.display = 'block';
                    document.getElementById('strong2').style.display = 'block';
                    setTimeout(function () {
                        document.getElementById('load2').style.display = 'none';
                        document.getElementById('strong2').style.display = 'none';
                        Swal.fire({
                            icon: 'success',
                            title: 'Congratulations',
                            text: 'Code Generated Successfully'
                        })
                    }, 5000);
                    setTimeout(function () {
                        document.getElementById('frame').style.display = 'block';
                    }, 7300);
                })
            }
        })

    }
    else if (mode.value == "2") {
        document.getElementById('mode2').style.display = 'block';
        let picker = document.getElementById('formFile'),
            table = document.getElementById('table');
        picker.onchange = () => Papa.parse(document.getElementById('formFile').files[0], {
            download: true,
            header: false,
            skipEmptyLines: true,
            complete: function (result) {
                column = result.data[0].length
                for (let i = 0; i < result.data.length; i++) {
                    let tr = table.insertRow();
                    for (let j = 0; j < result.data[0].length; j++) {
                        let td = tr.insertCell();
                        td.innerHTML = result.data[i][j];
                    }
                }
            }
        })
        document.getElementById('mode2next').style.display = 'block';
    }
    document.getElementById('mode2next').addEventListener('click', function () {
        if (column != 2) {
            Swal.fire({
                color: 'red',
                icon: 'error',
                title: 'Oops...',
                showConfirmButton: false,
                showCloseButton: true,
                text: 'Parameters are not exact',
                footer: '<a href="supervised.html">Learn Why ?</a>'
            })
        }
        else {
            Papa.parse(document.getElementById('formFile').files[0], {
                download: true,
                header: false,
                skipEmptyLines: true,
                complete: function (result) {
                    column = result.data[0].length
                    for (let i = 0; i < result.data.length; i++) {
                        x.push(result.data[i][0]);
                        y.push(result.data[i][1]);
                    }
                }
            })
        }
    })
}
)

