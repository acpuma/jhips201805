import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhips201805RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { Jhips201805CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { Jhips201805LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { Jhips201805DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { Jhips201805TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { Jhips201805EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Jhips201805JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { Jhips201805JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Jhips201805RegionMySuffixModule,
        Jhips201805CountryMySuffixModule,
        Jhips201805LocationMySuffixModule,
        Jhips201805DepartmentMySuffixModule,
        Jhips201805TaskMySuffixModule,
        Jhips201805EmployeeMySuffixModule,
        Jhips201805JobMySuffixModule,
        Jhips201805JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhips201805EntityModule {}
