package org.skillgrowth.java_web_final_project.service;

import org.skillgrowth.java_web_final_project.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
