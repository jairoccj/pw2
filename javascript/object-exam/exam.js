export class Exam{
    #answer;
    #weight;
    #exams;
    

    constructor(answer, weight, exams=[]){
        this.#answer = answer;
        this.#weight = weight;
        this.#exams = exams;
    }

    get answer(){
        return this.#answer;
    }
    set answer(answer){
        this.#answer = answer;
    }
    get weight(){
        return this.#weight;
    }
    set weight(weight){
        this.#weight = weight;
    }
    get exams(){
        return this.#exams;
    }
    set exams(exams){
        this.#exams = exams;
    }

    add(exam){
        exam.grade = Object.keys(exam.values).reduce((acc, q) => {
            return acc += (exam.values[q] === this.#answer.values[q]) ? this.#weight[q] : 0;
        }, 0)
        this.#exams.push(exam);
     }

    avg(){
        let soma = this.#exams.reduce((acc, exam) => acc += exam.grade, 0);
        return soma / this.#exams.length;
     }

    min(count=1){
        const lista = this.#exams.map((exam) => exam.grade);
        lista.sort();
        return lista.slice(0, count);
    }

    max(count=1){
        const lista = this.#exams.map((exam) => exam.grade);
        lista.sort();
        lista.reverse();
        return lista.slice(0, count);
    }

    lt(limit){
        const lista = this.#exams.map((exam) => exam.grade).filter((grade) => grade < limit);

        return lista;
    }

    gt(limit){
        const lista = this.#exams.map((exam) => exam.grade).filter((grade) => grade > limit);

        return lista;
    }

}