// slice() 매소드 사용해 배열 요소 추가or삭제하기
let study = ['html', 'css', 'javascript', 'jquery', 'react', 'nodejs'];

// 인수가 1개일 경우
let js = study.splice(2);
document.writeln(`반환된 배열: ${js}<br>` );
document.writeln(`변경된 배열: ${study}` );
document.writeln(`<hr>`)

// 인수가 2개일 경우
let jquery = js.splice(1,1);
document.writeln(`반환된 배열: ${jquery}<br>` );
document.writeln(`변경된 배열: ${js}` );
document.writeln(`<hr>`)

// 인수가 3개일 경우
let modernJs = js.splice(1, 0, 'typescript');
document.writeln(`반환된 배열: ${modernJs}<br>` );
document.writeln(`변경된 배열: ${js}`);
