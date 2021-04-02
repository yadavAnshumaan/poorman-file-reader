import { Pipe, PipeTransform } from "@angular/core";

enum Unit {
    bytes,
    kb,
    mb,
    gb,
    tb,
    pb,
    eb,
    zb,
    yb
}

@Pipe({ name: 'unitOfInformation' })
export class UnitOfInformationPipe implements PipeTransform {
    transform(value: number) {
        let count = 0;
        while (Math.floor(value / 1024) > 0) {
            value = Math.floor(value / 1024);
            count++;
        }
        return value + ' ' + Unit[count];
    }

}