package ca.bc.gov.jag.shuber.persistence.dao;

import ca.bc.gov.jag.shuber.persistence.model.Shift;
import javax.annotation.Generated;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ShiftDAO generated by Hibernate Tools hbm2dao.
 *
 * <p>Data Access Object (DAO) for domain model class Shift.
 *
 * @author hbm2dao
 * @version 1.0.0.231
 * @see ca.bc.gov.jag.shuber.persistence.model.Shift
 * @see <a href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/">Spring
 *     Data</a>
 */
@Repository
@Generated(
    value = "hbm2dao",
    date = "2018-02-19 06:48:40",
    comments = "Generated by Hibernate Tools hbm2dao."
)
public interface ShiftDAO extends JpaRepository<Shift, Integer> {
    // NOTE: add custom methods here

}
