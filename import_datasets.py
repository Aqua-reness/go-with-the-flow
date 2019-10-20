#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct 19 13:29:24 2019

@author: lynn
"""

import pandas as pd
import os
import numpy as np



cwd = os.getcwd()
dataset_dir = 'risingWaterDatasets/'
output_dir = 'client/src/data/'

def formatForLSTM():
    
    dup_year_idx = 0        
    duplicate_years = []        
    sameyears_idxes = []
    numdups = 1
    
    for n in range(len(years)):
        curryear = str(years[n])[:4]
        if not sameyears:
            duplicate_years[sameyear_list_idx]=curryear
            dup_year_idx = dup_year_idx + 1
            
        elif curryear == duplicate_years[dup_year_idx]:
            sameyears_idxes[numdups[dup_year_idx]]=n
            dup_year_idx = dup_year_idx + 1
            
        elif curryear != duplicate_years[dup_year_idx]:
            dup_year_idx = 0
            numdups = numdups + 1
            sameyears_idxes[numdups[dup_year_idx]] = n
            dup_year_idx = dup_year_idx + 1
    
    return


def convertToJSON(gmsl,artic_seaIce,antartica_seaIce,greenland_seaIce,co2,tempAnomalies,total_pop_sum):
    
    tables = [gmsl,artic_seaIce,antartica_seaIce,greenland_seaIce,co2,tempAnomalies,total_pop_sum]
    table_names = ['gmsl','artic_seaIce','antartica_seaIce','greenland_seaIce','co2','tempAnomalies','total_pop_sum']
    for n in range(len(tables)):
        tables[n].to_json(output_dir+table_names[n]+'.json')
    
    
    return


def parseCountryPopulation(population):
    
    countrynames = population.index.values.tolist()
    countryPopulationIndex = {}
    for countryDataNum in range(len(countrynames)):
        country = countrynames[countryDataNum]
        values = population.iloc[countryDataNum]
        countryPopulationIndex[country] = values
            
    
    return;
    
    
def getdata():

    gmsl_colNames = ['a', 'fc', 'year_decimal', 'numobs', 'numWobs', 'GMSL', 'GMSL_stdev', 'g60', 'GMSL_GIA', 'GMSL_GIA_stdev', 'g_gia_60','g_gia_60_nosem']
    co2_colNames = ['year', 'month', 'decimal_date', 'average', 'season_core', 'trend', 'days']
    iceLoss_colNames = ['year_decimal','mass','antartic_mass_uncertainty']
    
    gmsl = pd.read_csv(dataset_dir+"GMSL.txt", usecols=['year_decimal','GMSL_GIA'],index_col = "year_decimal", names = gmsl_colNames, delim_whitespace = True)
    artic_seaIce = pd.read_csv(dataset_dir+"ArticSeaIce.txt", usecols=['year','area'],header=0, delim_whitespace=True, index_col="year")
    antartica_seaIce = pd.read_csv(dataset_dir+"AntarticaMass.txt", usecols=['year_decimal','mass'],names=iceLoss_colNames,index_col="year_decimal",delim_whitespace=True)
    greenland_seaIce = pd.read_csv(dataset_dir+"GreenlandMASS.txt",usecols=['year_decimal','mass'],names=iceLoss_colNames,index_col="year_decimal",delim_whitespace=True)
    co2 = pd.read_csv(dataset_dir+"CO2.txt",names=co2_colNames,usecols=['decimal_date','average'],index_col="decimal_date",delim_whitespace=True)
    tempAnomalies = pd.read_csv(dataset_dir+"GlobalTempAnomaly.txt",usecols=['Year','Lowess'],header=0,delim_whitespace=True,index_col='Year')
    
    population = pd.read_excel(dataset_dir+'PopulationData.xls',skiprows=1,header=2,index_col='Country Name')
    population.drop([population.columns[0],population.columns[1],population.columns[2]],axis=1, inplace = True)
    
    #store each country's population in a dictionary
    parseCountryPopulation(population)
    
    #get the total population from the country's populations
    total_pop = population.transpose()
    total_pop_indexes = total_pop.index;
    total_pop_sum = total_pop.sum(axis=1,skipna=True).rename('totalpopulation')
        
    convertToJSON(gmsl,artic_seaIce,antartica_seaIce,greenland_seaIce,co2,tempAnomalies,total_pop_sum)

    return;
    
    
getdata()


    


