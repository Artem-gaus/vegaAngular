import { ErrorHandler, Inject, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

//
//now is not use
//

export class AppErrorHandler implements ErrorHandler {

    constructor(
        private ngZone: NgZone,
        @Inject(ToastrService) private toastrService: ToastrService) {
    }

    handleError(error: any): void {
        this.ngZone.run(() => {
            this.toastrService.error('An expected error happened', 'Error', {
                timeOut: 5000
            });
        });
    }
    

}