package ca.bc.gov.jag.shuber.persistence.model;

import ca.bc.gov.jag.shuber.persistence.AbstractAuditableVersionable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import org.hibernate.annotations.GenericGenerator;

/**
 * Location generated by Hibernate Tools hbm2java.
 *
 * <p>Domain model for database table location.
 *
 * @author hbm2java
 * @version 352
 */
@Entity
@Table(name = "location"
    // ,schema="shersched"
)
public class Location extends AbstractAuditableVersionable implements Serializable {

    /** UID. */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "location_id", nullable = false, updatable = false)
    private UUID locationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_location_id")
    private Location location;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "location_type_code")
    private LocationCode locationCode;

    @NotEmpty
    @Size(min = 1, max = 200)
    @Column(name = "location_name", nullable = false, length = 200)
    private String locationName;

    @Size(min = 0, max = 200)
    @Column(name = "description", length = 200)
    private String description;

    @Size(min = 0, max = 200)
    @Column(name = "address", length = 200)
    private String address;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "location")
    private Courtroom courtroom;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "location")
    private Courthouse courthouse;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "location")
    private Region region;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "location")
    private List<Location> locations = new ArrayList<Location>(0);
    
    /** No args constructor. */
    public Location() {}

    /** Required args constructor. */
    public Location(
            UUID locationId,
            String locationName,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount) {
        this.locationId = locationId;
        this.locationName = locationName;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
    }

    /** All args constructor. */
    public Location(
            UUID locationId,
            Location location,
            LocationCode locationCode,
            String locationName,
            String description,
            String address,
            String createdBy,
            String updatedBy,
            Date createdDtm,
            Date updatedDtm,
            long revisionCount,
            Courtroom courtroom,
            Courthouse courthouse,
            Region region,
            List<Location> locations) {
        this.locationId = locationId;
        this.location = location;
        this.locationCode = locationCode;
        this.locationName = locationName;
        this.description = description;
        this.address = address;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.createdDtm = createdDtm;
        this.updatedDtm = updatedDtm;
        this.revisionCount = revisionCount;
        this.courtroom = courtroom;
        this.courthouse = courthouse;
        this.region = region;
        this.locations = locations;
    }

    public UUID getLocationId() {
        return this.locationId;
    }

    public void setLocationId(UUID locationId) {
        this.locationId = locationId;
    }

    public Location getLocation() {
        return this.location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public LocationCode getLocationCode() {
        return this.locationCode;
    }

    public void setLocationCode(LocationCode locationCode) {
        this.locationCode = locationCode;
    }

    public String getLocationName() {
        return this.locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Courtroom getCourtroom() {
        return this.courtroom;
    }

    public void setCourtroom(Courtroom courtroom) {
        this.courtroom = courtroom;
    }

    public Courthouse getCourthouse() {
        return this.courthouse;
    }

    public void setCourthouse(Courthouse courthouse) {
        this.courthouse = courthouse;
    }

    public Region getRegion() {
        return this.region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public List<Location> getLocations() {
        return this.locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }
}
