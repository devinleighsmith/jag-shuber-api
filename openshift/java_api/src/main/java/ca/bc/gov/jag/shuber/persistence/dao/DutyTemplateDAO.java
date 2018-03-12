package ca.bc.gov.jag.shuber.persistence.dao;

import ca.bc.gov.jag.shuber.persistence.model.DutyTemplate;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DutyTemplateDAO generated by Hibernate Tools hbm2dao.
 *
 * <p>Domain data access object for database table duty_template.
 *
 * @author hbm2dao
 * @version 352
 * @see ca.bc.gov.jag.shuber.persistence.model.DutyTemplate
 */
@Repository
public interface DutyTemplateDAO extends JpaRepository<DutyTemplate, UUID> {
    // NOTE: add custom methods here

}
