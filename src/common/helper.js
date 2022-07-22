export const getGradeObject = (id, grade) => {
    let text;
    let gradeClassName;
    let valueClassName;
    if (id === 'ultraviolet') {

        if(grade === "") {
            grade = '정보없음'
        }
        let found = Number(grade);
        if (0 <= found && found < 3) {
            text = '낮음'
            gradeClassName = 'grade-good';
            valueClassName = 'blue-bell'
        } else if (3 <= found && found < 6) {
            text = '보통'
            gradeClassName = 'grade-moderate';
            valueClassName = 'green'
        } else if (6 <= found && found < 8) {
            text = '높음'
            gradeClassName = 'grade-unhealthy';
            valueClassName = 'yellow'
        } else if (8 <= found && found < 11) {
            text = '매우높음'
            gradeClassName = 'grade-very-unhealthy';
            valueClassName = 'coral'
        } else if (11 <= found) {
            text = '위험'
            gradeClassName = 'grade-hazardous';
            valueClassName = 'gray3'
        } else {
            text = '정보없음'
            gradeClassName = 'grade-null';
            valueClassName = 'gray3'
        }

    } else {
        switch (grade) {
            case "1":
                text = '좋음'
                gradeClassName = 'grade-good';
                valueClassName = 'blue-bell'
                break;
            case "2":
                text = '보통'
                gradeClassName = 'grade-moderate';
                valueClassName = 'green'
                break;
            case "3":
                text = '나쁨'
                gradeClassName = 'grade-unhealthy';
                valueClassName = 'yellow'
                break;
            case "4":
                text = '매우나쁨'
                gradeClassName = 'grade-very-unhealthy';
                valueClassName = 'gray3'
                break;
            case "":
                text = '정보없음'
                gradeClassName = 'grade-null';
                valueClassName = 'gray3'
                break;
            default:
        }
    }
    return {
        text,
        gradeClassName,
        valueClassName
    }
}