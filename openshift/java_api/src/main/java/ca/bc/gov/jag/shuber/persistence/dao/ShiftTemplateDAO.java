package ca.bc.gov.jag.shuber.persistence.dao;

import ca.bc.gov.jag.shuber.persistence.model.ShiftTemplate;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ShiftTemplateDAO generated by Hibernate Tools hbm2dao.
 *
 * <p>Domain data access object for database table shift_template.
 *
 * @author hbm2dao
 * @version 352
 * @see ca.bc.gov.jag.shuber.persistence.model.ShiftTemplate
 */
@Repository
public interface ShiftTemplateDAO extends JpaRepository<ShiftTemplate, UUID> {
    // NOTE: add custom methods here

}
