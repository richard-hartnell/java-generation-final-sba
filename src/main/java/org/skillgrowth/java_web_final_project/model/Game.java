package org.skillgrowth.java_web_final_project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Game {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String genre;
    private int year;

    public Game() {

    }

    public Game(Long id, String name, String genre, int year) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Game game)) return false;
        return getYear() == game.getYear() && Objects.equals(getId(), game.getId()) && Objects.equals(getName(), game.getName()) && Objects.equals(getGenre(), game.getGenre());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getGenre(), getYear());
    }
}
