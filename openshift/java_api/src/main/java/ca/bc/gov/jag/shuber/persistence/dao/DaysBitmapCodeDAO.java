package ca.bc.gov.jag.shuber.persistence.dao;

import ca.bc.gov.jag.shuber.persistence.model.DaysBitmapCode;
import ca.bc.gov.jag.shuber.persistence.model.DaysBitmapCodeId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DaysBitmapCodeDAO generated by Hibernate Tools hbm2dao.
 *
 * <p>Domain data access object for database table days_bitmap_code.
 *
 * @author hbm2dao
 * @version 352
 * @see ca.bc.gov.jag.shuber.persistence.model.DaysBitmapCode
 */
@Repository
public interface DaysBitmapCodeDAO extends JpaRepository<DaysBitmapCode, DaysBitmapCodeId> {
    // NOTE: add custom methods here

}
