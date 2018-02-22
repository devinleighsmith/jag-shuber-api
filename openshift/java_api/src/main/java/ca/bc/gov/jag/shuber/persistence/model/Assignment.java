package ca.bc.gov.jag.shuber.persistence.model;

import ca.bc.gov.jag.shuber.persistence.AbstractAuditableVersionable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

/**
 * Assignment generated by Hibernate Tools hbm2java.
 *
 * <p>Domain model for database table assignment.
 *
 * @author hbm2java
 * @version 1.0.0.243
 */
@Entity
@Table(name = "assignment"
    // ,schema="shersched"
)
@Generated(
    value = "hbm2java",
    date = "2018-02-21 07:25:02",
    comments = "Generated by Hibernate Tools hbm2java."
)
public class Assignment extends AbstractAuditableVersionable implements Serializable {
    /** UID. */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "assignment_id", nullable = false, updatable = false)
    private UUID assignmentId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "assignment_type_code", nullable = false)
    private AssignmentTypeCode assignmentTypeCode;

    @Column(name = "assigned_status_code", length = 20)
    private String assignedStatusCode;

    @Column(name = "sheriffs_required_count")
    private Long sheriffsRequiredCount;

    @Type(type = "yes_no")
    @Column(name = "template_flag", nullable = false, length = 1)
    private Boolean templateFlag;

    @Type(type = "yes_no")
    @Column(name = "block_assignment_flag", nullable = false, length = 1)
    private Boolean blockAssignmentFlag;

    @Temporal(TemporalType.DATE)
    @Column(name = "assignment_date", nullable = false, length = 13)
    private Date assignmentDate;

    @Column(name = "estimated_duration_minutes", nullable = false)
    private long estimatedDurationMinutes;

    @Temporal(TemporalType.TIME)
    @Column(name = "scheduled_start_time", length = 15)
    private Date scheduledStartTime;

    @Temporal(TemporalType.TIME)
    @Column(name = "scheduled_end_time", length = 15)
    private Date scheduledEndTime;

    @Column(name = "org_unit_id")
    private UUID orgUnitId;

    @Column(name = "location_id")
    private UUID locationId;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "assignment")
    private List<AssignmentQualificationXref> assignmentQualificationXrefs =
            new ArrayList<AssignmentQualificationXref>(0);
    /** No args constructor. */
    public Assignment() {}

    /** Required args constructor. */
    public Assignment(
            UUID assignmentId,
            AssignmentTypeCode assignmentTypeCode,
            Boolean templateFlag,
            Boolean blockAssignmentFlag,
            Date assignmentDate,
            long estimatedDurationMinutes,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount) {
        this.assignmentId = assignmentId;
        this.assignmentTypeCode = assignmentTypeCode;
        this.templateFlag = templateFlag;
        this.blockAssignmentFlag = blockAssignmentFlag;
        this.assignmentDate = assignmentDate;
        this.estimatedDurationMinutes = estimatedDurationMinutes;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
    }

    /** All args constructor. */
    public Assignment(
            UUID assignmentId,
            AssignmentTypeCode assignmentTypeCode,
            String assignedStatusCode,
            Long sheriffsRequiredCount,
            Boolean templateFlag,
            Boolean blockAssignmentFlag,
            Date assignmentDate,
            long estimatedDurationMinutes,
            Date scheduledStartTime,
            Date scheduledEndTime,
            UUID orgUnitId,
            UUID locationId,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount,
            List<AssignmentQualificationXref> assignmentQualificationXrefs) {
        this.assignmentId = assignmentId;
        this.assignmentTypeCode = assignmentTypeCode;
        this.assignedStatusCode = assignedStatusCode;
        this.sheriffsRequiredCount = sheriffsRequiredCount;
        this.templateFlag = templateFlag;
        this.blockAssignmentFlag = blockAssignmentFlag;
        this.assignmentDate = assignmentDate;
        this.estimatedDurationMinutes = estimatedDurationMinutes;
        this.scheduledStartTime = scheduledStartTime;
        this.scheduledEndTime = scheduledEndTime;
        this.orgUnitId = orgUnitId;
        this.locationId = locationId;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
        this.assignmentQualificationXrefs = assignmentQualificationXrefs;
    }

    public UUID getAssignmentId() {
        return this.assignmentId;
    }

    public void setAssignmentId(UUID assignmentId) {
        this.assignmentId = assignmentId;
    }

    public AssignmentTypeCode getAssignmentTypeCode() {
        return this.assignmentTypeCode;
    }

    public void setAssignmentTypeCode(AssignmentTypeCode assignmentTypeCode) {
        this.assignmentTypeCode = assignmentTypeCode;
    }

    public String getAssignedStatusCode() {
        return this.assignedStatusCode;
    }

    public void setAssignedStatusCode(String assignedStatusCode) {
        this.assignedStatusCode = assignedStatusCode;
    }

    public Long getSheriffsRequiredCount() {
        return this.sheriffsRequiredCount;
    }

    public void setSheriffsRequiredCount(Long sheriffsRequiredCount) {
        this.sheriffsRequiredCount = sheriffsRequiredCount;
    }

    public Boolean getTemplateFlag() {
        return this.templateFlag;
    }

    public void setTemplateFlag(Boolean templateFlag) {
        this.templateFlag = templateFlag;
    }

    public Boolean getBlockAssignmentFlag() {
        return this.blockAssignmentFlag;
    }

    public void setBlockAssignmentFlag(Boolean blockAssignmentFlag) {
        this.blockAssignmentFlag = blockAssignmentFlag;
    }

    public Date getAssignmentDate() {
        return this.assignmentDate;
    }

    public void setAssignmentDate(Date assignmentDate) {
        this.assignmentDate = assignmentDate;
    }

    public long getEstimatedDurationMinutes() {
        return this.estimatedDurationMinutes;
    }

    public void setEstimatedDurationMinutes(long estimatedDurationMinutes) {
        this.estimatedDurationMinutes = estimatedDurationMinutes;
    }

    public Date getScheduledStartTime() {
        return this.scheduledStartTime;
    }

    public void setScheduledStartTime(Date scheduledStartTime) {
        this.scheduledStartTime = scheduledStartTime;
    }

    public Date getScheduledEndTime() {
        return this.scheduledEndTime;
    }

    public void setScheduledEndTime(Date scheduledEndTime) {
        this.scheduledEndTime = scheduledEndTime;
    }

    public UUID getOrgUnitId() {
        return this.orgUnitId;
    }

    public void setOrgUnitId(UUID orgUnitId) {
        this.orgUnitId = orgUnitId;
    }

    public UUID getLocationId() {
        return this.locationId;
    }

    public void setLocationId(UUID locationId) {
        this.locationId = locationId;
    }

    public List<AssignmentQualificationXref> getAssignmentQualificationXrefs() {
        return this.assignmentQualificationXrefs;
    }

    public void setAssignmentQualificationXrefs(
            List<AssignmentQualificationXref> assignmentQualificationXrefs) {
        this.assignmentQualificationXrefs = assignmentQualificationXrefs;
    }
}
