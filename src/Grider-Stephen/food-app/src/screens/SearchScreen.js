import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByprice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results </Text>
      <ResultsList results={filterResultsByprice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByprice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByprice("$$$")} title="Expensive" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
