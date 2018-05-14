import React , { Component } from 'react';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

class ReviewScreen extends Component{
    renderLikedJobs() {
        return this.props.likedJobs.map( job => {
            const {
                company,
                formattedRelativeTime,
                url,
                latitude,
                longitude,
                jobtitle,
                jobkey
            } = job;
            const initialRegion = {
              latitude,
              longitude,
              latitudeDelta: 0.045,
              longitudeDelta: 0.02
            };
            return (
                <Card title={jobtitle} key={jobkey} >
                    <View style={{ hieght: 200 }}>
                        <MapView
                         style={{ flex: 1 }}
                         cacheEnabled={ Platform.OS === 'android' }
                         scrollEnabled={false}
                         initialRegion={initialRegion}
                        />
                        <View styles={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                    </View>
                    <Button
                         title="Apply Now!"
                         backgroundColor="#03A9F4"
                         onPress={() => Linking.openURL(url)}
                    />
                </Card>
            );
        });
    }

  render() {
    return(
      <ScrollView>
          {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}
const styles = {
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
};

function mapStateToProps(state) {
    return { likedJobs: state.likedJobs };
}
export default connect(mapStateToProps)(ReviewScreen);