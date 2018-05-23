/*****************************AutoGenerated Code : Do not edit *******************************/
// Type generated from Swagger definition

import * as superAgent from "superagent";
import { Assignment,Region,Courthouse,Sheriff,Courtroom,JailRoleCode,OtherAssignCode,WorkSectionCode,SheriffRankCode,Run,Shift,MultipleShiftUpdateRequest,ShiftCopyOptions,DutyRecurrence,Duty,DutyImportDefaultsRequest,SheriffDuty } from "./models"


export default class Client {
    public errorProcessor: (error:any) => Error = (e)=>e;
    
    constructor(private _agent:superAgent.SuperAgent<any> = superAgent.agent()){
    }

    get agent(){
        return this._agent;
    }  

    public async GetAssignments( courthouseId:string , startDate:string , endDate:string ):Promise<Array<any>>{
        const params = { 
            "courthouseId":courthouseId,
            "startDate":startDate,
            "endDate":endDate 
        };
        try{
            const response = await this.agent.get(`/Assignments`)
                .query(params)
            return response.body as Array<any>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateAssignment( model:Assignment ):Promise<Assignment>{
        try{
            const response = await this.agent.post(`/Assignments`)
                .send(model)
            return response.body as Assignment;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetAssignmentById( id:string ):Promise<Assignment>{
        try{
            const response = await this.agent.get(`/Assignments/${id}`)
            return response.body as Assignment;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateAssignment( id:string , model:Assignment ):Promise<Assignment>{
        try{
            const response = await this.agent.put(`/Assignments/${id}`)
                .send(model)
            return response.body as Assignment;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async ExpireAssignment( id:string ):Promise<void>{
        try{
            const response = await this.agent.post(`/Assignments/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteAssignment( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/Assignments/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetRegions():Promise<Array<Region>>{
        try{
            const response = await this.agent.get(`/regions`)
            return response.body as Array<Region>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateRegion( model:Region ):Promise<Region>{
        try{
            const response = await this.agent.post(`/regions`)
                .send(model)
            return response.body as Region;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetRegionById( id:string ):Promise<Region>{
        try{
            const response = await this.agent.get(`/regions/${id}`)
            return response.body as Region;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateRegion( id:string , model:Region ):Promise<Region>{
        try{
            const response = await this.agent.put(`/regions/${id}`)
                .send(model)
            return response.body as Region;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteRegion( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/regions/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetCourthouses():Promise<Array<Courthouse>>{
        try{
            const response = await this.agent.get(`/courthouses`)
            return response.body as Array<Courthouse>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateCourthouse( model:Courthouse ):Promise<Courthouse>{
        try{
            const response = await this.agent.post(`/courthouses`)
                .send(model)
            return response.body as Courthouse;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetCourthouseById( id:string ):Promise<Courthouse>{
        try{
            const response = await this.agent.get(`/courthouses/${id}`)
            return response.body as Courthouse;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateCourthouse( id:string , model:Courthouse ):Promise<Courthouse>{
        try{
            const response = await this.agent.put(`/courthouses/${id}`)
                .send(model)
            return response.body as Courthouse;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteCourthouse( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/courthouses/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetSheriffs( courthouseId:string ):Promise<Array<Sheriff>>{
        const params = { 
            "courthouseId":courthouseId 
        };
        try{
            const response = await this.agent.get(`/sheriffs`)
                .query(params)
            return response.body as Array<Sheriff>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateSheriff( model:Sheriff ):Promise<Sheriff>{
        try{
            const response = await this.agent.post(`/sheriffs`)
                .send(model)
            return response.body as Sheriff;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetSheriffById( id:string ):Promise<Sheriff>{
        try{
            const response = await this.agent.get(`/sheriffs/${id}`)
            return response.body as Sheriff;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateSheriff( id:string , model:Sheriff ):Promise<Sheriff>{
        try{
            const response = await this.agent.put(`/sheriffs/${id}`)
                .send(model)
            return response.body as Sheriff;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteSheriff( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/sheriffs/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetCourtrooms( courthouseId:string ):Promise<Array<Courtroom>>{
        const params = { 
            "courthouseId":courthouseId 
        };
        try{
            const response = await this.agent.get(`/courtrooms`)
                .query(params)
            return response.body as Array<Courtroom>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateCourtroom( model:Courtroom ):Promise<Courtroom>{
        try{
            const response = await this.agent.post(`/courtrooms`)
                .send(model)
            return response.body as Courtroom;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetCourtroomById( id:string ):Promise<Courtroom>{
        try{
            const response = await this.agent.get(`/courtrooms/${id}`)
            return response.body as Courtroom;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateCourtroom( id:string , model:Courtroom ):Promise<Courtroom>{
        try{
            const response = await this.agent.put(`/courtrooms/${id}`)
                .send(model)
            return response.body as Courtroom;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteCourtroom( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/courtrooms/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetJailRoleCodes():Promise<Array<JailRoleCode>>{
        try{
            const response = await this.agent.get(`/codes/jailroles`)
            return response.body as Array<JailRoleCode>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetOtherAssignCodes():Promise<Array<OtherAssignCode>>{
        try{
            const response = await this.agent.get(`/codes/otherassign`)
            return response.body as Array<OtherAssignCode>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetWorkSectionCodes():Promise<Array<WorkSectionCode>>{
        try{
            const response = await this.agent.get(`/codes/worksection`)
            return response.body as Array<WorkSectionCode>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetSheriffRankCodes():Promise<Array<SheriffRankCode>>{
        try{
            const response = await this.agent.get(`/codes/sheriffrank`)
            return response.body as Array<SheriffRankCode>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetRuns( courthouseId:string ):Promise<Array<Run>>{
        const params = { 
            "courthouseId":courthouseId 
        };
        try{
            const response = await this.agent.get(`/runs`)
                .query(params)
            return response.body as Array<Run>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateRun( model:Run ):Promise<Run>{
        try{
            const response = await this.agent.post(`/runs`)
                .send(model)
            return response.body as Run;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetRunById( id:string ):Promise<Run>{
        try{
            const response = await this.agent.get(`/runs/${id}`)
            return response.body as Run;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateRun( id:string , model:Run ):Promise<Run>{
        try{
            const response = await this.agent.put(`/runs/${id}`)
                .send(model)
            return response.body as Run;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteRun( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/runs/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetShifts( courthouseId:string ):Promise<Array<Shift>>{
        const params = { 
            "courthouseId":courthouseId 
        };
        try{
            const response = await this.agent.get(`/Shifts`)
                .query(params)
            return response.body as Array<Shift>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateShift( model:Shift ):Promise<Shift>{
        try{
            const response = await this.agent.post(`/Shifts`)
                .send(model)
            return response.body as Shift;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetShiftById( id:string ):Promise<Shift>{
        try{
            const response = await this.agent.get(`/Shifts/${id}`)
            return response.body as Shift;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateShift( id:string , model:Shift ):Promise<Shift>{
        try{
            const response = await this.agent.put(`/Shifts/${id}`)
                .send(model)
            return response.body as Shift;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteShift( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/Shifts/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateMultipleShifts( model:MultipleShiftUpdateRequest ):Promise<Array<Shift>>{
        try{
            const response = await this.agent.post(`/Shifts/multiple`)
                .send(model)
            return response.body as Array<Shift>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CopyShifts( model:ShiftCopyOptions ):Promise<Array<Shift>>{
        try{
            const response = await this.agent.post(`/Shifts/copy`)
                .send(model)
            return response.body as Array<Shift>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetDutyRecurrences( startDate:string , endDate:string ):Promise<Array<DutyRecurrence>>{
        const params = { 
            "startDate":startDate,
            "endDate":endDate 
        };
        try{
            const response = await this.agent.get(`/DutyRecurrences`)
                .query(params)
            return response.body as Array<DutyRecurrence>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateDutyRecurrence( model:DutyRecurrence ):Promise<DutyRecurrence>{
        try{
            const response = await this.agent.post(`/DutyRecurrences`)
                .send(model)
            return response.body as DutyRecurrence;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetDutyRecurrenceById( id:string ):Promise<DutyRecurrence>{
        try{
            const response = await this.agent.get(`/DutyRecurrences/${id}`)
            return response.body as DutyRecurrence;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateDutyRecurrence( id:string , model:DutyRecurrence ):Promise<DutyRecurrence>{
        try{
            const response = await this.agent.put(`/DutyRecurrences/${id}`)
                .send(model)
            return response.body as DutyRecurrence;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async ExpireDutyRecurrence( id:string ):Promise<void>{
        try{
            const response = await this.agent.post(`/DutyRecurrences/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteDutyRecurrence( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/DutyRecurrences/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetDuties():Promise<Array<any>>{
        try{
            const response = await this.agent.get(`/Duty`)
            return response.body as Array<any>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateDuty( model:Duty ):Promise<Duty>{
        try{
            const response = await this.agent.post(`/Duty`)
                .send(model)
            return response.body as Duty;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetDutyById( id:string ):Promise<Duty>{
        try{
            const response = await this.agent.get(`/Duty/${id}`)
            return response.body as Duty;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateDuty( id:string , model:Duty ):Promise<Duty>{
        try{
            const response = await this.agent.put(`/Duty/${id}`)
                .send(model)
            return response.body as Duty;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteDuty( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/Duty/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async ImportDefaultDuties( body:DutyImportDefaultsRequest ):Promise<Array<Duty>>{
        try{
            const response = await this.agent.post(`/Duty/import`)
                .send(body)
            return response.body as Array<Duty>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetSheriffDuties():Promise<Array<SheriffDuty>>{
        try{
            const response = await this.agent.get(`/SheriffDuty`)
            return response.body as Array<SheriffDuty>;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async CreateSheriffDuty( model:SheriffDuty ):Promise<SheriffDuty>{
        try{
            const response = await this.agent.post(`/SheriffDuty`)
                .send(model)
            return response.body as SheriffDuty;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async GetSheriffDutyById( id:string ):Promise<SheriffDuty>{
        try{
            const response = await this.agent.get(`/SheriffDuty/${id}`)
            return response.body as SheriffDuty;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async UpdateSheriffDuty( id:string , model:SheriffDuty ):Promise<SheriffDuty>{
        try{
            const response = await this.agent.put(`/SheriffDuty/${id}`)
                .send(model)
            return response.body as SheriffDuty;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
    public async DeleteSheriffDuty( id:string ):Promise<void>{
        try{
            const response = await this.agent.delete(`/SheriffDuty/${id}`)
            return response.body as void;
        }catch(error){
            if(this.errorProcessor){
                throw this.errorProcessor(error);
            }else{
                throw error;
            }
        }
    }    
}