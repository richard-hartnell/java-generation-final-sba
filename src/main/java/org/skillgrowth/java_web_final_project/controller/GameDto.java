package org.skillgrowth.java_web_final_project.controller;


public class GameDto
{

    private String name;

    private String genre;

    private int year;

    public GameDto() {

    }
    public GameDto(String name, String genre, int year0)
    {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }

    public String getName()
    {
        return name;
    }

    public void setName( String name )
    {
        this.name = name;
    }

    public String getGenre()
    {
        return genre;
    }

    public void setGenre( String genre )
    {
        this.genre = genre;
    }

    public int getYear()
    {
        return year;
    }

    public void setYear( String imageUrl )
    {
        this.year = year;
    }
}