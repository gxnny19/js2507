let memNum = parseInt(prompt("입장객은 몇 명인가요?"));  // 전체 입장객 
let colNum = parseInt(prompt("한 줄에 몇 명씩 앉습니까?"));  // 한 줄에 몇 명씩?

if (memNum % colNum === 0) {  // 나누어 떨어지면
    rowNum = memNum / colNum;
}
else {  // 나누어 떨어지지 않으면}
    rowNum = parseInt(memNum / colNum) + 1;
}
document.writeln('<table>');
for (let i = 0; i < rowNum; i++) {
    document.writeln('<tr>');
    for (let j = 1; j <= colNum; j++) {
        seatNo = i * colNum + j;
        if (seatNo > memNum) break;
        document.writeln(`<td> 좌석 ${seatNo} </td>`);
    }
    document.writeln('</tr>');
}
document.writeln('</table>')