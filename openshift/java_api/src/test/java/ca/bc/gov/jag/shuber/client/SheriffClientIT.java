package ca.bc.gov.jag.shuber.client;

import java.util.Collection;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import ca.bc.gov.jag.shuber.persistence.model.Sheriff;

/**
 * Integration test.
 * @author michael.gabelmann
 */
public class SheriffClientIT extends AbstractIT {
	/** Logger. */
	private static final Logger log = LogManager.getLogger(SheriffClientIT.class);
	
	@BeforeEach
	@Override
	protected void beforeTest() {

	}

	@AfterEach
	@Override
	protected void afterTest() {

	}
	
	@Test
	public void test1_getSheriffs() {
		ResponseEntity<SheriffResources> response = restTemplate.getForEntity("/api/sheriffs", SheriffResources.class);
		Collection<Sheriff> results = response.getBody().getContent();	
		
		Assertions.assertNotNull(results);
		Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
		
		for (Sheriff s : results) {
			log.debug("Sheriff name=" + s.getName());
		}
	}

	/** helper class. */
	static class SheriffResources extends Resources<Sheriff> {}

}
