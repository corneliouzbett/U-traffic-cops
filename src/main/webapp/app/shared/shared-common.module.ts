import { NgModule } from '@angular/core';

import { UtrafficSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [UtrafficSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [UtrafficSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class UtrafficSharedCommonModule {}
