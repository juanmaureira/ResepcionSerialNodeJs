import SerialPort from 'serialport';

const port = new SerialPort('COM1', {
    baudRate: 19200,
    dataBits: 8,
    stopBits: 1
});

port.on('open', (e) => {
    if(e) 
        console.log("error abriendo puerto");
    else
        console.log("COM1 abierto");
});

port.on('data', data => {
    // TODO 
    // Procesar los datos como un array
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
        

    console.log(`${data}`);
});
