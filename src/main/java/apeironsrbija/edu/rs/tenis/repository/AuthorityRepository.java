package apeironsrbija.edu.rs.tenis.repository;

import apeironsrbija.edu.rs.tenis.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
