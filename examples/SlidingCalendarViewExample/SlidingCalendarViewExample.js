import React, {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import CalendarView from 'react-native-sliding-calendar-view';

class CalendarViewExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: new Date(),
    }
  }

  render() {
    return <View style={styles.container}>
      <CalendarView
        selectedDay={this.state.selectedDay}
        onDaySelected={this.onDaySelected.bind(this)}
      >
        <View style={styles.content}>
          <Text>Past here your content</Text>
        </View>
      </CalendarView>
    </View>
  }

  onDaySelected(day) {
    this.setState({selectedDay: day});
  }
}

export default CalendarViewExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
