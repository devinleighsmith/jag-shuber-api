/*****************************AutoGenerated Code : Do not edit *******************************/
export interface DutyRecurrence {
    id?: string;
    startTime?: string;
    endTime?: string;
    daysBitmap?: number;
    sheriffsRequired?: number;
    assignmentId?: string;
}
export interface Assignment {
    id?: string;
    title?: string;
    workSectionId?: string;
    courthouseId?: string;
    courtroomId?: string;
    runId?: string;
    jailRoleCode?: string;
    otherAssignCode?: string;
    dutyRecurrences?: Array<DutyRecurrence>;
}
export interface Region {
    id?: string;
    code?: string;
    name?: string;
    location?: any;
}
export interface Courthouse {
    id?: string;
    code?: string;
    name?: string;
    parentCourthouseId?: string;
    regionId?: string;
    addressId?: string;
    location?: any;
}
export interface Sheriff {
    id?: string;
    firstName?: string;
    lastName?: string;
    badgeNo?: string;
    imageUrl?: string;
    homeCourthouseId?: string;
    currentCourthouseId?: string;
    rankCode?: string;
    alias?: string;
}
export interface Courtroom {
    id?: string;
    code?: string;
    name?: string;
    courthouseId?: string;
}
export interface JailRoleCode {
    code?: string;
    description?: string;
    expiryDate?: string;
}
export interface OtherAssignCode {
    code?: string;
    description?: string;
    expiryDate?: string;
}
export interface WorkSectionCode {
    code?: string;
    description?: string;
    expiryDate?: string;
}
export interface SheriffRankCode {
    code?: string;
    description?: string;
    expiryDate?: string;
}
export interface Run {
    id?: string;
    title?: string;
    courthouseId?: string;
}
export interface Shift {
    id?: string;
    workSectionId?: string;
    courthouseId?: string;
    sheriffId?: string;
    startDateTime?: string;
    endDateTime?: string;
}
export interface MultipleShiftUpdateRequest {
    shiftIds?: Array<string>;
    sheriffId?: string;
    startTime?: string;
    endTime?: string;
    workSectionId?: string;
}
export interface ShiftCopyOptions {
    shouldIncludeSheriffs?: boolean;
    startOfWeekSource?: string;
    startOfWeekDestination?: string;
    courthouseId?: string;
}
export interface SheriffDuty {
    id?: string;
    sheriffId?: string;
    dutyId?: string;
    startDateTime?: string;
    endDateTime?: string;
}
export interface Duty {
    id?: string;
    startDateTime?: string;
    endDateTime?: string;
    assignmentId?: string;
    dutyRecurrenceId?: string;
    sheriffDuties?: Array<SheriffDuty>;
    comments?: string;
}
export interface DutyImportDefaultsRequest {
    courthouseId?: string;
    date?: string;
}
export interface Leave {
    id?: string;
    sheriffId?: string;
    leaveCode?: string;
    leaveSubCode?: string;
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    isPartial?: number;
    comment?: string;
    cancelDate?: string;
    cancelReasonCode?: string;
}
export interface LeaveCancelReasonCode {
    code?: string;
    description?: string;
    expiryDate?: string;
}
export interface LeaveCode {
    code?: string;
    description?: string;
    expiryDate?: string;
}
export interface LeaveSubCode {
    code?: string;
    subCode?: string;
    description?: string;
    expiryDate?: string;
}
