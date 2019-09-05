export function studentDataModel() {

    this.getName = () => {
        return this.name;
    }

    this.setName = (name) => {
        this.name = name;
    }

    this.getRollNumber = () => {
        return this.rollNumber;
    }

    this.setRollNumber = (rollNumber) => {
        this.rollNumber = rollNumber;
    }

}
